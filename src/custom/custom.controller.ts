import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Custom } from './custom.interface';
import { CustomService } from './custom.service';
import { CustomDto } from './dto/get-custom.dto';

@ApiTags('Custom')
@Controller('custom')
export class CustomController {
  constructor(private customService: CustomService) {}

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: CustomDto })
  @ApiParam({ name: 'component' })
  @Get(':component')
  getCustom(@Param() params: { component: string }): Custom {
    return this.customService.getCustom(params.component);
  }
}
