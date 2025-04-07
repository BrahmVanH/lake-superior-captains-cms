import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Amenity } from '@/lib/__generated__/types';

interface Props {
	amenity: Amenity;
	types: string[];
}
const AmenityItem: React.FC<Props> = ({ amenity, types }) => {
	const [updatedAmenityName, setUpdatedAmenityName] = React.useState<string>(amenity.amenityName);
	const [updatedAmenityType, setUpdatedAmenityType] = React.useState<string>(amenity.amenityType);
	const [allowEdit, setAllowEdit] = React.useState<boolean>(false);

	const handleChangeAmenityName = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setUpdatedAmenityName(e.target.value);
	};

	const handleChangeAmenityType = (v: string) => {
		setUpdatedAmenityType(v);
	};

	const handleAllowEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setAllowEdit(!allowEdit);
	};

	return (
		<div>
			{!allowEdit ? (
				<>
					<p>{amenity.amenityName}</p>
					<p>{amenity.amenityType}</p>
				</>
			) : (
				<>
					<input value={updatedAmenityName} onChange={handleChangeAmenityName} placeholder='name' />
					<Select onValueChange={handleChangeAmenityType} defaultValue={updatedAmenityType}>
						<SelectTrigger>
							<SelectValue placeholder='Type' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Amenity types</SelectLabel>
								{types.map((type) => (
									<SelectItem key={type} value={type}>
										{type}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</>
			)}
			<button onClick={handleAllowEdit}>edit</button>
		</div>
	);
};

export default AmenityItem;
