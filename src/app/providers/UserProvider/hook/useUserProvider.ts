import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import { BaseResponse, IUser } from '@entities/types';
import { TOKEN_LOCAL_STORAGE_KEY, ROLES_STAFF } from '@shared/constants';

export const useUserProvider = () => {
  const { i18n } = useTranslation();
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSetUser = useCallback((user?: IUser) => {
    const isUserAdmin = (user && ROLES_STAFF.includes(user?.group.id)) || false;
    setIsAdmin(isUserAdmin);
    setUser(user);
  }, []);

  useEffect(() => {
    if (!user) {
      if (token) {
        setToken(token);
        setIsLoading(true);
        axiosApi
          .get<BaseResponse<IUser>>('/user')
          .then(({ data: { data } }) => {
            handleSetUser(data);
            i18n.changeLanguage(data.lang);
          })
          .catch((err) => {
            console.error(err);
            toast.error('Не удалось получить данные юзера');
            localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
            setToken(null);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [user, isLoading, token, handleSetUser, i18n]);

  const value = useMemo(
    () => ({
      isAdmin,
      user,
      setUser: handleSetUser,
      isLoading,
      setIsLoading,
      token,
      setToken,
    }),
    [handleSetUser, isAdmin, isLoading, token, user],
  );

  return {
    value,
  };
};
