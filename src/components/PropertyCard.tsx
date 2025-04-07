import * as React from 'react';
import type { ImageObject, Property } from '@/lib/__generated__/types';
// import ImageGallery from './ImageGallery';

export interface Props {
	gallery: ImageObject[];
	info: Property;
}

const galleryViewportStyles: React.CSSProperties = {
	maxHeight: 'calc(3 * (100px + 10px))',
	overflowY: 'scroll',
};

const PropertyCard: React.FC<Props> = ({ gallery, info }) => {
	React.useEffect(() => {
		if (info) {
			console.log('propertyData');
		}
	}, [info]);
	return (
		<div className='w-[80%] bg-blue-500 mb-8 p-4'>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col items-center pr-4 m-8 mr-0 border-r-0 md:border-3 border-transparent border-b-0 md:border-b-3 border-gradient-primary'>
					<div>
						<h1>{info.propertyName}</h1>
					</div>
					<div className='flex flex-col items-center'>
						{/* <!-- add tooltip "edit propery name and description" --> */}
						{/* <!--Link wrapped around StyledBtn just style the a tag --> */}
						{/* <a className='mb-1 text-black'>Property info</a> */}
						{/* <!-- tooltip upload and elete property photos --> */}
						{/* <a> Photos </a> */}
						{/* <!-- tooltip edit availability calendar --> */}
						{/* <a>Calendar</a> */}
					</div>
				</div>

				{/* <!-- ImgGalContainer --> */}
				<div className='w-[60%] m-2'>{/* <ImageGallery enableImageSelection={false} galleryViewportStyle={galleryViewportStyles} rowHeight={100} galleryArray={gallery} /> */}</div>
			</div>
			{/* <!-- EditPropertyOverlay --> */}
			{/* <!-- CalendarOverlay --> */}
		</div>
	);
};

export default PropertyCard;
