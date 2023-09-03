import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/task.interface';
import { taskDB } from 'fake-db/task-db';

@Injectable({})
export class TaskService {
  private readonly tasks: Task[] = taskDB;

  createTask(task: Task): string {
    try {
      taskDB.push(task);

      return 'Task added';
    } catch (error) {
      throw new HttpException('Error creating task', HttpStatus.BAD_REQUEST);
    }
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
