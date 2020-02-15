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

const mockGalleryItems: GalleryItemProps[] = [
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-eb9ff5fa-441f-4ddd-8668-2ba2fb25e9a5.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-eb9ff5fa-441f-4ddd-8668-2ba2fb25e9a5.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    },
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-ae17cef3-6a6b-401b-9bc3-2b37d882d545.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-ae17cef3-6a6b-401b-9bc3-2b37d882d545.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    },
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-ce8a643e-4cf4-41c7-9243-e068812c9523.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-ce8a643e-4cf4-41c7-9243-e068812c9523.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    },
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-d3e8410b-5bf5-422e-a392-b1b773e151a8.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-d3e8410b-5bf5-422e-a392-b1b773e151a8.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    },
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-9a5f4e4f-89b7-4221-91c8-f314d522f1f3.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-9a5f4e4f-89b7-4221-91c8-f314d522f1f3.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    },
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-f5db7083-da6e-44d3-bd20-9b4f666f7a89.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-f5db7083-da6e-44d3-bd20-9b4f666f7a89.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    },
    {
        mediaUrl: 'https://aqzodowgen.cloudimg.io/bound/1920x1080/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-96834bda-025a-4e41-bc74-9ff31251b833.jpg',
        thumbnailUrl: 'https://aqzodowgen.cloudimg.io/bound/800x600/n/https://mytechblog.blob.core.windows.net/blog-photos/20190818-96834bda-025a-4e41-bc74-9ff31251b833.jpg',
        mediaType: 'image',
        title: '',
        uploadDate: new Date()
    }
];

const mockGalleryProps: MasonryGalleryProps = {
    title: 'Cool Photos and Videos',
    galleryItems: mockGalleryItems
};

const GalleryItem: React.FC<GalleryItemProps> = (props) => {
    return (
        <div className="masonry-gallery-item">
            <img src={props.thumbnailUrl} alt={props.title}/>
            <div className="masonry-gallery-item--caption">{props.title}</div>
        </div>
    )
};

const MasonryGalleryComponent: React.FC = () => {
    return (
        <div className="masonry-gallery-container">
            <h2 className="masonry-gallery-title">{mockGalleryProps.title}</h2>
            <div className="masonry-gallery">
                {mockGalleryProps.galleryItems.map(item => <GalleryItem {...item}></GalleryItem>)}
            </div>
        </div>
    )
};

MasonryGalleryComponent.displayName = 'Gallery';
export default MasonryGalleryComponent;
