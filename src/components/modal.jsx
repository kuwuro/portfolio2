import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

function Modal({ children, onClose }) {
    const [modalOpen, setModalOpen] = useState(false);
    const screenWidth = window.innerWidth;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setModalOpen(true);
        }, 50);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.modal-content')) {
                handleCloseModal();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const handleCloseModal = () => {
        setModalOpen(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };
    
    const modalContent = (
        screenWidth <= 600 ? (
            <div className={`fixed bottom-0 w-full z-50 transition-opacity ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ height: '80vh' }}>
                <div className="modal-content max-w-full md:max-w-lg lg:max-w-none w-auto h-full flex flex-col p-8 bg-white dark:bg-black rounded-lg shadow-xl dark:border dark:border-white20 border-opacity-20 bg-opacity-90 backdrop-blur-xl transition-transform transform scale-100 fade-up">
                    {children}
                    <button onClick={handleCloseModal} className="absolute top-7 right-7 dark:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        ) : (
            <div className={`fixed inset-0 flex justify-center items-center bg-black80 z-50 transition-opacity ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="modal-content max-w-xs md:max-w-lg lg:max-w-none w-auto flex flex-col p-8 bg-white dark:bg-black rounded-lg shadow-xl border border-gray-200 border-opacity-60 bg-opacity-90 backdrop-blur-xl transition-transform transform scale-100 fade-down">
                    {children}
                    <button onClick={handleCloseModal} className="absolute top-7 right-7 dark:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    );

    return ReactDOM.createPortal(
        modalContent,
        document.body
    );
}

export default Modal;