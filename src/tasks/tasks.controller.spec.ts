import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

// Simulamos el servicio
const mockTasksService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  updateStatus: jest.fn(),
  remove: jest.fn(),
};

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        { provide: TasksService, useValue: mockTasksService },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
