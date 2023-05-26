import S3 from "aws-sdk/clients/s3";
import multer from "multer";
import multerS3 from "multer-s3";
import uuid from "uuid4";
import { S3Client } from "@aws-sdk/client-s3";

const s3Config = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
  },
});

const storage = multerS3({
  s3: s3Config,
  bucket: "modakbul",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null, Date.now().toString() + uuid() + file.originalname);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const s3 = new S3();

const deleteImage = (fileKey: string) => {
  s3.deleteObject(
    {
      Bucket: "modakbul",
      Key: fileKey,
    },
    (err, data) => {
      if (err) {
        throw err;
      }
    }
  );
};

export { deleteImage };
