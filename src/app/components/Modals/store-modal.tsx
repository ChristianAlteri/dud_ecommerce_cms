'use client';

import { useStoreModal } from "../../../../hooks/use-store-modal";

import { Modal } from "../ui/modal";

export const NewStoreModal = () => {
    const storeModal = useStoreModal();

    return ( 
        <Modal 
            title="Welcome to Stella"
            description="You are now logged in as an admin."
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
            >
            Future create form
        </Modal>
     );
}
 
