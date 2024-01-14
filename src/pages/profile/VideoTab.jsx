import React, { useEffect } from 'react';
import './profile.css';
import { Modal } from 'bootstrap'; // Import Bootstrap Modal

const VideoTab = () => {
  useEffect(() => {
    // Initialize modal when the component mounts
    const videoModal = new Modal(document.getElementById('video-modal'));

    // Event listener for video item click
    const handleVideoItemClick = (e) => {
      if (e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('data-video-src');
        document.querySelector('.modal-video source').src = src;
        videoModal.show();
      }
    };

    // Attach click event listener to document
    document.addEventListener('click', handleVideoItemClick);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('click', handleVideoItemClick);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="gallery min-vh-100">
      <div className="container-lg">
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col">
            <div className="gallery-item" data-video-src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4">
              {/* You can customize the appearance of each video item */}
              <video width="100%" height="100%" controls>
                <source src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col">
            <div className="gallery-item" data-video-src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4">
              {/* You can customize the appearance of each video item */}
              <video width="100%" height="100%" controls>
                <source src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col">
            <div className="gallery-item" data-video-src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4">
              {/* You can customize the appearance of each video item */}
              <video width="100%" height="100%" controls>
                <source src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col">
            <div className="gallery-item" data-video-src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4">
              {/* You can customize the appearance of each video item */}
              <video width="100%" height="100%" controls>
                <source src="https://res.cloudinary.com/dcag8pp44/video/upload/v1705221538/StudentFolderName/nrdt31pbasrkt7sysm6f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Add more video items as needed */}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="video-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <video className="modal-video" width="100%" height="100%" controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;
