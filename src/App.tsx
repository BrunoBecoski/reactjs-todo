import Icon from "./components/icon";
import Text from "./components/text";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";

import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Skeleton from "./components/skeleton";

export default function App() {
  return (
    <Container>
      <div className="grid gap-10">
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

        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Badge variant="secondary">5</Badge>
            <Badge variant="secondary" loading>
              5
            </Badge>
          </div>
          <div className="flex gap-1">
            <Badge variant="primary">2 de 5</Badge>
            <Badge variant="primary" loading>
              2 de 5
            </Badge>
          </div>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} />
            <ButtonIcon icon={TrashIcon} loading />
          </div>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="secondary" />
            <ButtonIcon icon={TrashIcon} variant="secondary" loading />
          </div>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={TrashIcon} variant="tertiary" loading />
          </div>
        </div>

        <div>
          <InputText />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <InputCheckbox />
            <InputCheckbox loading />
          </div>
          <div className="flex gap-1">
            <InputCheckbox checked />
            <InputCheckbox checked loading />
          </div>
        </div>

        <div>
          <Card size="md">ToDo List</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" rounded="sm" />
          <Skeleton className="w-96 h-6" />
          <Skeleton className="size-12" rounded="full" />
        </div>
      </div>
    </Container>
  );
}
