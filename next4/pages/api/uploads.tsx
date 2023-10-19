import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
   api: {
      // next에서는 기본으로 bodyParser가 작동되므로 false로 해준다.
      bodyParser: false,
   },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
   if (req.method === "POST") {
      // local에 저장할 path
      const imgStoragePath = path.join(process.cwd() + "/public" + "/images");

      // fs모듈을 사용하여 path에 폴더가 없을때엔 생성하도록 할 수 있다.
      try {
         await fs.readdir(imgStoragePath);
      } catch {
         await fs.mkdir(imgStoragePath);
      }

      // 추후 S3 버켓으로 보내려고 default는 false로 하였다.
      /** true일시 로컬에 저장 */
      const readFile = (req: NextApiRequest, saveLocally: boolean) => {
         const options: formidable.Options = {};

         if (saveLocally) {
            // true일때 option객체에 path와 filename을 저장
            options.uploadDir = imgStoragePath;
            options.filename = (name, ext, path, form) => {
               return new Date().getFullYear() + "_" + path.originalFilename;
            };
         }

         return new Promise<{
            fields: formidable.Fields;
            files: formidable.Files;
         }>((resolve, rejects) => {
            const form = formidable(options);

            form.parse(req, (err, fields, files) => {
               if (err) {
                  rejects(err);
               }
               console.log(fields);
               console.log(files);
               resolve({ fields, files });
            });
         });
      };

      const data = await readFile(req, true);

      res.status(201).json({ message: "Success" });
   }
}
