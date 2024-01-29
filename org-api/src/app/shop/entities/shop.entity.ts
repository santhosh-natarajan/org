import { Shop } from '../../../../../common/interfaces/shop.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'shop' })
export class ShopEntity implements Shop {
  @PrimaryGeneratedColumn()
  shopId?: number;

  @Column({ type: 'char varying', name: 'shop_name' })
  shopName?: string;

  @Column({ type: 'char varying', name: 'address_line_1' })
  addressLine_1?: string;

  @Column({ type: 'char varying', name: 'address_line_2' })
  addressLine_2?: string;

  @Column({ type: 'char varying', name: 'area' })
  area?: string;

  @Column({ type: 'char varying', name: 'city' })
  city?: string;

  @Column({ type: 'char varying', name: 'state' })
  state?: string;

  @Column({ type: 'char varying', name: 'zip_code' })
  zipCode?: string;

  @Column({ type: 'char varying', name: 'phone_number' })
  phoneNumber?: string;

  @Column({ type: 'char varying', name: 'email' })
  email?: string;

  @Column({ type: 'char varying', name: 'gst_number' })
  gstNumber: string;
}
