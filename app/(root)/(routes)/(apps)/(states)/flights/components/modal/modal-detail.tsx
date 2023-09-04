// components/Modal.js

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from '@/components/ui/badge';

function CustomModal({ isOpen, onClose, children }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogTrigger>
        <span className='badge border border-slate-500 rounded rounded-lt-xs mx-2 px-2 text-slate-600' >

          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: 13 }}
          />
        </span>
      </DialogTrigger>
      <DialogContent className={"lg:max-w-screen-lg"}>
        <DialogHeader>
          <DialogTitle>Flight details</DialogTitle>
          <Separator className="bg-slate-700" />
          <DialogDescription>
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CustomModal;
