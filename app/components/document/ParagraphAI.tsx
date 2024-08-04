'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure
} from '@nextui-org/react';

export default function ParagraphAI({
  subtitle,
  paragraph
}: {
  subtitle: string;
  paragraph: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <div
      className="-m-2 p-2 rounded-md border-1 border-transparent hover:border-primary hover:cursor-pointer hover:bg-content3"
      onClick={handleClick}
    >
      <h3 className="font-bold text-lg">{subtitle}</h3>
      <p>{paragraph}</p>
      <Modal
        size="2xl"
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        isDismissable={true}
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {subtitle}
              </ModalHeader>
              <ModalBody>
                <Textarea
                  minRows={12}
                  rows={12}
                  maxRows={15}
                  placeholder="Type here..."
                  defaultValue={paragraph}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
