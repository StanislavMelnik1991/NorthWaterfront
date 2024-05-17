import { TableControls, TableText } from '@entities/components';
import { IRole } from '@entities/types';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';

interface Props {
  data: Array<IRole>;
  onDelete: (id: number) => () => Promise<void> | void;
}

export const useTableRows = ({ data, onDelete }: Props) => {
  return data.map(({ id, name, users, description }) => {
    return {
      roles: <TableText>{name}</TableText>,
      description: <TableText>{description}</TableText>,
      staff: <TableText>{users.join(', ')}</TableText>,
      controls: (
        <TableControls
          getUpdateRoute={AppRoutes[AppRoutesEnum.ADMIN_ROLES_UPDATE]}
          onDelete={onDelete(id)}
          id={id}
        />
      ),
    };
  });
};
