import 'reflect-metadata';
import { Container } from 'inversify';
import { DataProvider } from './dataprovider/dataprovider';
import { Server } from './server';

let container = new Container({autoBindInjectable: true});



export default container;