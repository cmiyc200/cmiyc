import 'reflect-metadata';
import { Container } from 'inversify';
import { DataProvider } from './dataprovider/dataprovider';
import { BaseService } from './services/base.service';
import { Server } from './server';

let container = new Container({autoBindInjectable: true});

export default container;