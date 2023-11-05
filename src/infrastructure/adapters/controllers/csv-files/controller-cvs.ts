import { Controller, Post, Req, Res } from '@nestjs/common';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import { Fruit } from 'src/domain/fruit';
import { createConnection, getRepository } from 'typeorm';

@Controller('csv')
export class CsvController {
  @Post('upload')
  async uploadCsv(@Req() req, @Res() res) {
    const connection = await createConnection();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fruitRepository = getRepository(Fruit);

    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        connection.close();
        res.send('CSV data has been processed and loaded succesfully ✨.');
      });
  }
}
