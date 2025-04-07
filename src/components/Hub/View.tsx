import { Amenity, ImageObject, Property } from '@/lib/__generated__/types';
import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';
import AmenityItem from './AmenityItem';

interface Props {
	property: Property;
	imgs: ImageObject[];
}
const View: React.FC<Props> = ({ property, imgs }) => {
	const [name, setName] = React.useState<string>(property.propertyName);
	const [description, setDescription] = React.useState<string>(property.propertyDescription);
	const [amenities, setAmenities] = React.useState<Amenity[]>(property.amenities);
	const [newAmenity, setNewAmenity] = React.useState<Amenity | null>({ amenityName: '', amenityType: '' });
	const [amenityTypes, setAmenityTypes] = React.useState<string[]>([]);

	React.useEffect(() => {
		setAmenityTypes(amenities.map((amenity) => amenity.amenityType));
	}, [amenities]);

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setName(e.target.value);
	};

	const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setDescription(e.target.value);
	};

	const handleChangeNewAmenityType = (v: string) => {
		setNewAmenity({ ...newAmenity, amenityName: v });
	};

	const handleChangeNewAmenityName = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setNewAmenity({ ...newAmenity, amenityName: e.target.value });
	};
	return (
		<div className='w-full h-screen overflow-y-scroll border-2 border-primary'>
			<div className='w-full flex flex-col'>
				<div className='flex w-full'>
					<p className='text-sm'>NAME</p>
					<input value={name} type='text' onChange={handleChangeName} className='w-full text-md' />
					<p className='text-sm'>DESCRIPTION</p>
					<input value={description} type='text' onChange={handleChangeDescription} className='w-full text-md' />
					<div>
						<div className='flex flex-row '>
							<p>ADD AMENITY</p>

							<input value={newAmenity.amenityName} type='text' onChange={handleChangeNewAmenityName} placeholder='name' />
							<Select onValueChange={handleChangeNewAmenityType}>
								<SelectTrigger>
									<SelectValue placeholder='Type' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Amenity types</SelectLabel>
										{amenityTypes.map((type) => (
											<SelectItem key={type} value={type}>
												{type}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className='border-2 border-black rounded-sm'>
							{amenities.map((amenity: Amenity) => (
								<AmenityItem key={amenity.amenityName} amenity={amenity} types={amenityTypes} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
