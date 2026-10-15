import Icon from "./components/icon";
import Text from "./components/text";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          ToDo List
        </Text>
        <Text className="text-green-base">ToDo List</Text>
        <Text variant="body-md-bold">ToDo List</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={TrashIcon} />
        <Icon svg={XIcon} />
      </div>

      <div className="flex gap-1">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
    </div>
  );
}
