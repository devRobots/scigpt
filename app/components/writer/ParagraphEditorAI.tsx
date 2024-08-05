'use client';

import { updateDraft } from '@/app/lib/firebase/firestore';
import { regenerate } from '@/app/lib/writer/draft';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Textarea
} from '@nextui-org/react';
import { useState } from 'react';
import { IoSparkles } from 'react-icons/io5';

export default function ParagraphEditorAI({
  uuid,
  name,
  isOpen,
  onClose,
  title,
  text,
  setText
}: {
  uuid: string;
  name: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  setText: (text: string) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handlerRegenerate = async () => {
    setLoading(true);
    const generated = await regenerate(name, uuid);
    await updateDraft(uuid, { [name]: generated });
    setText(generated);
    setLoading(false);
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
              {loading ? (
                <Spinner />
              ) : (
                <Textarea minRows={10} rows={20} maxRows={30} value={text} />
              )}
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
