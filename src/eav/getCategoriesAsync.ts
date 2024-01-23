import path from "path";
import { cwd } from "process";
import fs from "fs/promises";

export async function getCategoriesAsync() {

    const folder = path.resolve(cwd(), `./docs`);
    const entries = await fs.readdir(folder);
    const folders = await Promise.all(entries.map(async (entry) => {

        let filePath = path.join(folder, entry);
        let stat = await fs.stat(filePath);

        return [filePath, stat] as [string, typeof stat];


    }));

    return folders.filter(([_, stat]) => stat.isDirectory())
        .map(([entryPath]) => {
            const folderName = path.basename(entryPath);
            return {
                category: folderName.substring(folderName.indexOf('-') + 1),
                order: folderName.substring(0, folderName.indexOf('-')),
                path: entryPath,
            }
        });

    //return [
    //    {
    //        id: "1",
    //        slug: "eavfw",
    //        title: "EAVFW",
    //        order:"01",
    //        repository: "https://github.com/eavfw/eavfw-io",
    //        path:"eavfw"
    //    }
    //];
}



