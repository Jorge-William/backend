import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  //   Req,
  //   Res,
  Body,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { TaskService } from './task.service';
import { Task } from 'src/interfaces/task.interface';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('create')
  async createTask(@Body() taskInfo: Task) {
    this.taskService.createTask(taskInfo);
  }

  @Get('get-all')
  async getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Put('update')
  updateTask() {}

  @Delete('delete')
  deleteTask() {}
}
