
import fs from "fs/promises";
import path from "path";
import { cwd } from "process";
import { getCategoriesAsync } from "./getCategoriesAsync";
export async function getTopicsAsync(categorySlug: string) {
    const categories = await getCategoriesAsync();
    const category = categories.find(x => x.category === categorySlug)!;

    const folder = category.path;// path.resolve(cwd(), `./docs/${category.order}-${category.category}`);
    const entries = await fs.readdir(folder);
    const folders = await Promise.all(entries.map(async (entry) => {

        let filePath = path.join(folder, entry);
        let stat = await fs.stat(filePath);

        return [filePath,stat] as [string,typeof stat];


    }));

    return folders.filter(([filename,stat]) => stat.isDirectory())
        .map(([filename]) => {
            const folderName = path.basename(filename);
            return {
                topic: folderName.substring(folderName.indexOf('-')+1),
                order: folderName.substring(0, folderName.indexOf('-')),
                path: filename,
            }
        });

         
}

