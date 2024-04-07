import classNames from "classnames";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PageHeader } from "@entities/PageHeader";
import { QuillEditor } from "@entities/QuillEditor/QuillEditor";
import { getRouteAdminNews } from "@shared/constants";
import { Button, Card, TextField } from "@shared/ui";
import styles from "./CreateNewsPage.module.scss";

interface Props {
  className?: string;
}

const Page = ({ className }: Props) => {
  const [val, setText] = useState("");
  const location = useLocation();
  return (
    <div className={classNames(styles.wrapper, className)}>
      <PageHeader
        breadcrumbs={[
          { href: getRouteAdminNews(), title: "Новости" },
          { href: location.pathname, title: "Создание новости" },
        ]}
      />
      <Card className={styles.card} radius={24} flexDirection="column" gap={24}>
        <TextField
          wrapperClassName={styles.textField}
          label="Заголовок"
          placeholder="Заголовок новости"
        />
        <Button variant={"light"} className={styles.downloadButton}>
          Изображение обложки
        </Button>
        <QuillEditor
          label="Текст новости"
          initialValue={val}
          setValue={setText}
          hideSpinner={() => {}}
          showSpinner={() => {}}
          uploadImage={async () => {
            return [
              {
                url: "https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/how_to_set_your_default_browser_signal/Signal-How-to-Set-Your-Default-Browser-on-Any-Device-Hero.jpg?width=1200&amp;name=Signal-How-to-Set-Your-Default-Browser-on-Any-Device-Hero.jpg",
              },
            ];
          }}
        />
        <div className={styles.submitBlock}>
          <Button size="large" variant="primary">
            Опубликовать
          </Button>
          <Button size="large" variant="secondary">
            Сохранить черновик
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Page;
