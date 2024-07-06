import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { image_type } from "./ImageCards";

interface image_modal_interface {
  image_info: image_type;

  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = (props: image_modal_interface) => {
  const { image_info, isOpen, onClose } = props;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isDismissable={false}
        isKeyboardDismissDisabled={false}
        backdrop="blur"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {image_info.img_title}
              </ModalHeader>
              <ModalBody>
                <Image
                  width="w-[100%]"
                  height="w-auto"
                  src={image_info.img_src}
                  alt={image_info.img_alt}
                  className="w-full max-h-[50%]"
                />
                <span className="text-default-600 text-sm">
                  {image_info.img_alt}
                </span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ImageModal;
