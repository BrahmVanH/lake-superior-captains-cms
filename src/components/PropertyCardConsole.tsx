import PropertyCard from '@/components/PropertyCard';
import type { Props as CardProps } from '@/components/PropertyCard';
import * as React from 'react';

export interface Props {
	propertyCardData: CardProps[];
}

const PropertyCardConsole: React.FC<Props> = ({ propertyCardData }) => {
	React.useEffect(() => {
		if (propertyCardData) {
			console.log('propertyCardData: ', propertyCardData);
		}
	}, [propertyCardData]);
	return (
		<>
			{propertyCardData && (
				<div className='flex flex-col justify-center items-center mt-8'>
					{propertyCardData.map((property: CardProps) => (
						<PropertyCard key={property.info._id} info={property.info} gallery={property.gallery} />
					))}
				</div>
			)}
		</>
	);
};

export default PropertyCardConsole;
