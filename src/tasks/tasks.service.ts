import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // 1. Crear tarea
  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  // 2. Listar tareas con filtros
  async findAll(filterDto: GetTasksFilterDto) {
    const { status, priority } = filterDto;
    return this.prisma.task.findMany({
      where: {
        ...(status && { status }),
        ...(priority && { priority }),
      },
    });
  }

  // 3. Obtener tarea por ID
  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException(`La tarea con ID ${id} no existe`);
    }
    return task;
  }

  // 4. Actualizar tarea completa
  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id); // Verificamos que exista primero
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  // 5. Cambiar solo el estado
  async updateStatus(id: string, status: TaskStatus) {
    await this.findOne(id); // Verificamos que exista
    return this.prisma.task.update({
      where: { id },
      data: { status },
    });
  }

  // 6. Eliminar tarea
  async remove(id: string) {
    await this.findOne(id); // Verificamos que exista
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
