import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { ISelectOption } from '@entities/components';
import { BaseResponse, IDepartment } from '@entities/types';

export const useGetDepartments = () => {
  const { t } = useTranslation();
  const [options, setOptions] = useState<Array<ISelectOption>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<ISelectOption | null>(null);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } =
        await axiosApi.get<BaseResponse<Array<IDepartment>>>(`/departments`);
      if (data?.data) {
        const res: Array<ISelectOption> = data.data.map(({ id, name }) => ({
          label: name,
          value: id,
        }));
        res.unshift({ label: 'Другое', value: 0 });
        setOptions(res);
        return data.data;
      } else {
        toast.error(t('errors.getError'));
      }
    } catch (error) {
      toast.error(t('errors.getError'));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  return {
    getData,
    isLoading,
    options,
    selected,
    setSelected,
  };
};