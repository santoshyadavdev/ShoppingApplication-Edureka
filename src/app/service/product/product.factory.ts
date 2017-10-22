
import { LoginService } from '../login/login.service';
import { ProductService } from './product.service';


export function ProductFactory(login: LoginService) {
    return new ProductService(login.isLoggedIn);
}

export const ProductFactoryProvider = {
    provide: ProductService,
    useFactory: ProductFactory,
    deps: [LoginService]
}
