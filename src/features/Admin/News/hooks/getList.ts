import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { axiosApi } from "@entities/api";
import {
  BaseResponse,
  INews,
  INewsFilter,
  INewsSort,
  ListParams,
} from "@entities/types";

export const useGetNewsList = () => {
  const { t } = useTranslation("news");
  const getData = useCallback(
    async (params: ListParams<INewsSort, INewsFilter>) => {
      try {
        const {
          data: { data },
        } = await axiosApi.get<BaseResponse<Array<INews>>>("/news", { params });
        return data;
      } catch (error) {
        toast.error(t("toast.listError"));
        console.error(error);
      }
    },
    [t],
  );

  return {
    getData,
  };
};