import { useState } from 'react';
import galleryData from '../content/json/gallery.json';
import type { GalleryCollection } from '../types';

const Gallery: React.FC = () => {
  const collections = galleryData as GalleryCollection[];
  const [selectedCollection, setSelectedCollection] = useState<GalleryCollection | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openLightbox = (collection: GalleryCollection, imageIndex: number) => {
    setSelectedCollection(collection);
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedCollection(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCollection) {
      setSelectedImageIndex((prev) => 
        prev === selectedCollection.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCollection) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedCollection.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="main-content">
      <section className="section gallery-section">
        <div className="container">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">A collection of moments captured through my lens</p>

          <div className="gallery-collections">
            {collections.map((collection) => (
              <div key={collection.id} className="gallery-collection">
                <div className="collection-header">
                  <h2 className="collection-title">{collection.title}</h2>
                  {collection.date && <span className="collection-date">{collection.date}</span>}
                </div>
                <p className="collection-description">{collection.description}</p>
                
                <div className="collection-grid">
                  {collection.images.map((image, idx) => (
                    <div 
                      key={idx} 
                      className="gallery-image-wrapper"
                      onClick={() => openLightbox(collection, idx)}
                    >
                      <img 
                        src={image} 
                        alt={`${collection.title} - ${idx + 1}`}
                        className="gallery-image"
                      />
                      <div className="gallery-image-overlay">
                        <svg 
                          className="zoom-icon" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedCollection && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedCollection.images[selectedImageIndex]} 
              alt={`${selectedCollection.title} - ${selectedImageIndex + 1}`}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{selectedCollection.title}</h3>
              <p>{selectedImageIndex + 1} / {selectedCollection.images.length}</p>
            </div>
          </div>
          
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
};

export default Gallery;
