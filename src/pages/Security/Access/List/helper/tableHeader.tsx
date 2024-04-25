import { useTranslation } from 'react-i18next';
import {
  BuildingSelection,
  StreetSelection,
  EntranceSelection,
} from '@widgets/addressSelection';
import { TableFilter } from '@widgets/Table';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

interface AddressWrapper<T> {
  street: T;
  building: T;
  entrance: T;
}

interface Options {
  value: string | number;
  label: string;
}

interface Props {
  value: AddressWrapper<Options | null>;
  onChange: AddressWrapper<(val: Options | null) => void>;
}

export const useTableHeader: (props: Props) => Array<ConfigItemType> = ({
  onChange,
  value,
}) => {
  const { t } = useTranslation('table');
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.index')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'type',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.type')}
        </Text>
      ),
      width: 153,
    },
    {
      name: 'street',
      label: (
        <TableFilter
          label={t('header.street')}
          isActive={!!value.street}
          filter={
            <StreetSelection onChange={onChange.street} value={value.street} />
          }
        />
      ),
    },
    {
      name: 'building',
      label: (
        <TableFilter
          label={t('header.building')}
          disabled={!value.street}
          isActive={!!value.building}
          filter={
            <BuildingSelection
              streetId={value.street?.value}
              onChange={onChange.building}
              value={value.building}
            />
          }
        />
      ),
      width: 200,
    },
    {
      name: 'entrance',
      label: (
        <TableFilter
          label={t('header.entrance')}
          disabled={!value.building}
          isActive={!!value.entrance}
          filter={
            <EntranceSelection
              streetId={value.building?.value}
              onChange={onChange.entrance}
              value={value.entrance}
            />
          }
        />
      ),
      width: 200,
    },
    {
      name: 'state',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.state')}
        </Text>
      ),
      width: 200,
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
