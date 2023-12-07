import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './HANDS_ON_LAB/clase8/public/img');
    },
    filename: (req, file, cb) => {
        const filename = Date.now() + file.originalname;
        cb(null, filename)
    }
});

export const uploader = multer({storage});
