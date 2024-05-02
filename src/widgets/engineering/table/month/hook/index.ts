import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalizedDate } from '@features/date';
import { useGetCurrentEnergyConsumers } from '@features/engineering/energy/hooks/getCurrent';
import { getStartOfMonth, getEndOfMonth } from '@features/utils';
import { useTableHeader, useTableRows } from '../helper';

interface Props {
  date: Date;
  id: string;
  measures: string;
}

export const useTable = ({ date, id, measures }: Props) => {
  const { t } = useTranslation('table');
  const { data, getData, isLoading } = useGetCurrentEnergyConsumers();
  const { getLocalizedMonth } = useLocalizedDate();
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((val) => {
      if (!val && !data) {
        const dateFrom = getStartOfMonth(new Date(date));
        const dateTo = getEndOfMonth(new Date(date));
        console.log('date', date);
        console.log('from', dateFrom);
        console.log('to', dateTo);
        getData({
          id: id,
          from: Math.floor(dateFrom.getTime() / 1000),
          to: Math.floor(dateTo.getTime() / 1000),
          variant: 'daily',
        });
      }
      return !val;
    });
  }, [data, date, getData, id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [date, wrapperRef]);
  const header = useTableHeader({ measures });
  const rows = useTableRows({
    data: data?.results.filter((el) => !!el) || [],
    measures,
  });
  return {
    t,
    isExpanded,
    header,
    rows,
    toggleIsExpanded,
    wrapperRef,
    isLoading,
    month: getLocalizedMonth(date.getMonth()),
  };
};
