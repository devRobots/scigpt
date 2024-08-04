'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea
} from '@nextui-org/react';
import { IoSparkles } from 'react-icons/io5';

export default function ParagraphEditorAI({
  isOpen,
  onClose,
  title,
  text,
  setText
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  setText: (text: string) => void;
}) {
  const handlerRegenerate = () => {
    setText('Hola');
  };

  return (
    <Modal
      size="2xl"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      closeButton={true}
      isDismissable={true}
      className="scifi-dark"
      classNames={{ backdrop: 'backdrop-blur-md bg-warning bg-opacity-30' }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <Textarea minRows={10} rows={20} maxRows={30} value={text} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={handlerRegenerate}>
                <IoSparkles />
                Regenerar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
