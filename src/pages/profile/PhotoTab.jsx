import React, { useEffect } from 'react';
import './profile.css';
import { Modal } from 'bootstrap'; // Import Bootstrap Modal

const PhotoTab = () => {
  useEffect(() => {
    // Initialize modal when the component mounts
    const galleryModal = new Modal(document.getElementById('gallery-modal'));

    // Event listener for gallery item click
    const handleGalleryItemClick = (e) => {
      if (e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('src');
        document.querySelector('.modal-img').src = src;
        galleryModal.show();
      }
    };

    // Attach click event listener to document
    document.addEventListener('click', handleGalleryItemClick);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('click', handleGalleryItemClick);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="gallery min-vh-100">
      <div className="container-lg">
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col">
            <img src="https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg" className="gallery-item" alt="gallery" />
          </div>
          <div className="col">
            <img src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg" className="gallery-item" alt="gallery" />
          </div>
          <div className="col">
            <img src="https://t4.ftcdn.net/jpg/01/96/87/33/360_F_196873357_Z8LRgbrFSLloSUP1QEqaVAi3OBbVIaWh.jpg" className="gallery-item" alt="gallery" />
          </div>
          <div className="col">
            <img src="https://www.quickanddirtytips.com/wp-content/uploads/2022/05/ezgif.com-gif-maker-3.jpg" className="gallery-item" alt="gallery" />
          </div>
          <div className="col">
            <img src="./assets/gallery/5.jpg" className="gallery-item" alt="gallery" />
          </div>
          <div className="col">
            <img src="./assets/gallery/6.jpg" className="gallery-item" alt="gallery" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="gallery-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="./assets/gallery/1.jpg" className="modal-img" alt="modal img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoTab;