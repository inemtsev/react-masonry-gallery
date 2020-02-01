import React from 'react';
import './masonryGallery.css';

export interface MasonryGalleryProps {
    galleryItems: GalleryItemProps[];
    title: string;
}

export interface GalleryItemProps {
    mediaUrl: string;
    title: string;
    thumbnailUrl: string;
    mediaType: string;
    uploadDate: Date;
}

const GalleryItem: React.FC<GalleryItemProps> = (props) => {
    return (
        <div className="masonry-gallery-item">
            <img src={props.thumbnailUrl} alt={props.title}/>
            <div className="masonry-gallery-item--caption">{props.title}</div>
        </div>
    )
};

const MasonryGalleryComponent: React.FC<MasonryGalleryProps> = (props) => {
    return (
        <div className="masonry-gallery-container">
            <div className="masonry-gallery-title">{props.title}</div>
            <div className="masonry-gallery">
                {props.galleryItems.map(item => <GalleryItem {...item}></GalleryItem>)}
            </div>
        </div>
    )
};

MasonryGalleryComponent.displayName = 'Gallery';
export default MasonryGalleryComponent;
