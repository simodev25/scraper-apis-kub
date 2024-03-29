import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { Observable } from 'rxjs';


import { Logger } from '../shared/logger/logger.decorator';
import { ScraperLoggerService } from '../shared/logger/loggerService';
import { Merchantwords } from '../scraper/product/merchantwords';
import { ScraperService } from '../scraper/scraper.service';
import { ScraperRequest } from './scraperRequest';
import { Product } from '../scraper/product/product';

@Controller()
export class ProduitsController {

  constructor(@Logger({
                context: 'scraperMicroService',
                prefix: 'ProduitsController',
              }) private logger: ScraperLoggerService,
              private scraperService: ScraperService) {

  }


  @MessagePattern({ cmd: 'scrapeSearchWordLite' })
  scrapeSearchWordLite(searchWord: string): Observable<Product[]> {
    return this.scraperService.scrapeSearchWordLite(searchWord);
  }

  @MessagePattern({ cmd: 'searchword-responses' })
  scrapeSearchWordAsync(@Payload() scraperRequest: ScraperRequest, @Ctx() context: RmqContext): Observable<Merchantwords[]> {
    return this.scraperService.scrapeSearchWordAsync(scraperRequest);
  }

  @MessagePattern({ cmd: 'asin-responses' })
  scrapeByAsin(@Payload() scraperRequest: ScraperRequest, @Ctx() context: RmqContext): Observable<Product[]> {

    return this.scraperService.scrapeByAsin(scraperRequest);
  }

  @MessagePattern({ cmd: 'category-responses' })
  getScrapeCategory(@Payload() scraperRequest: ScraperRequest, @Ctx() context: RmqContext): Observable<Product[]> {

    return this.scraperService.scrapeByCategory(scraperRequest);
  }

  @MessagePattern({ cmd: 'categorys-salesOffers-responses' })
  getCategorysSalesOffers(@Payload() scraperRequest: ScraperRequest, @Ctx() context: RmqContext): Observable<Product[]> {

    return this.scraperService.getCategorysSalesOffers();
  }

}
