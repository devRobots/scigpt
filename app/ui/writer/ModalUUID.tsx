import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal';
import { Snippet } from '@nextui-org/snippet';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ModalUUID({ uuid }: { uuid: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    if (uuid) onOpen();
  }, [uuid]);

  const onCloseHandler = () => {
    router.push(`/writer/${uuid}/thesis`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onCloseHandler}
      backdrop="blur"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Redaccion creada
        </ModalHeader>
        <ModalBody>
          <p>Guarda el identificador para continuar editando:</p>
          <Snippet>{uuid}</Snippet>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
