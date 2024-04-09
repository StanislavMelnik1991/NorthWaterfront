import { PageHeader } from "@entities/PageHeader";
import { QuillEditor } from "@entities/QuillEditor/QuillEditor";
import { getRouteAdminNews } from "@shared/constants";
import { IconStaple } from "@shared/icons";
import { PageLayout } from "@shared/layouts";
import { Button, Card, TextField } from "@shared/ui";
import { useCreateNews } from "../hook/useUpdateNews";
import styles from "./Page.module.scss";

const Page = () => {
  const { errors, handleSubmit, setFieldValue, values, isLoading } =
    useCreateNews();
  return (
    <PageLayout>
      <PageHeader
        breadcrumbs={[
          { href: getRouteAdminNews(), title: "Новости" },
          { href: "", title: "Редактирование новости" },
        ]}
      />
      <Card className={styles.card} radius={24} flexDirection="column" gap={24}>
        <TextField
          value={values.title}
          error={errors.title}
          onChange={(ev) => setFieldValue("title", ev.target.value)}
          wrapperClassName={styles.textField}
          label="Заголовок"
          placeholder="Заголовок новости"
        />
        <Button variant={"light"} className={styles.downloadButton}>
          <IconStaple width={24} height={24} />
          Изображение обложки
        </Button>
        <QuillEditor
          error={errors.html_content}
          label="Текст новости"
          initialValue={values.html_content}
          setValue={(val) => setFieldValue("html_content", val)}
        />
        <div className={styles.submitBlock}>
          <Button
            loading={isLoading}
            size="large"
            variant="primary"
            onClick={handleSubmit(1)}
          >
            Опубликовать
          </Button>
          {/* <Button
            loading={isLoading}
            size="large"
            variant="secondary"
            onClick={handleSubmit(0)}
          >
            Сохранить черновик
          </Button> */}
        </div>
      </Card>
    </PageLayout>
  );
};

export default Page;
