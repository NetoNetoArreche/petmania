
import { Client, Service, Package, Product } from './types';

export const CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 98765-4321',
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqZx9ynOsbOahVgejyPp9MRwH45xWAxvcJKouhKM_zY7XDl-t_nKHPe5g_pPVx3aI96-FOAxZC6T7398mZ0gBRzb_CCGqap7Nd0jcop1V7RNN1wx-fWEUAeYwUcjhvxobJoXjGLIi3TZX_YpHlAAxbGnP_BGlWGxmEj7-Jj_vk8Hd80O_ZPkmVxrTao8bJp9v40VJw5qGE-ZLPZfn4ZIs_jFI66YP0pk0EVOgcHPmQNW6U6zUIkfZG_qSEOit3zrZ15-UDBIoT3dNy',
    pets: [
      {
        id: 'p1',
        name: 'Rex',
        breed: 'Golden Retriever',
        age: '4 Years',
        weight: '32 kg',
        gender: 'Male',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCtOJna2r0x1u6buV5qr1wqDA5rSoe8b6U4MpxP89bM7lukJol6uSyjUOQEEg87ZTQVUrfZdobwxucr2RiSryO7LucUnRbPokaDTlYo-sl0wQO7B4dgmHcCLzhngD02gNzNVGLL_uO-AwgazVhb5IHKGRepX-3-AUKrwCe0JDFVVpvgKaxnTTKfe0powCzq0Px-Fu-d3fFhC81LRFYfKGgUMltuCdMQyxkKr4Vvkn-ecXXC6LHEKOHIwOJgvalSo2jvcWIr4ob-xOc',
        alerts: [{ type: 'Vaccine', title: 'Vaccine Due', message: 'Rabies shot is due in 5 days.' }],
        history: [
          { date: 'Today, 10:00 AM', serviceName: 'Full Grooming & Bath', provider: 'Jessica', status: 'Completed' },
          { date: 'Sep 12, 2023', serviceName: 'General Checkup', provider: 'Dr. Sarah M.', status: 'Completed' }
        ]
      }
    ]
  },
  {
    id: 'c2',
    name: 'Carlos Mendez',
    email: 'carlos.m@email.com',
    phone: '(11) 91234-5678',
    status: 'Frequent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7vkAKjJNgammDY_qM0MWKMPuF09cDYWWxCL7b7px1C3xRHc-FLpAUFvjb7KSdW38gCzd_8sSgbaBaX7PEGGVK8GpknlyKNwc8Ab2fSsWr7Dz3AQ8WFnToOnKQTa1lDBsLwstw-bzfEnNSDODmsKZKIrPcrTGsrLHTXntijx6IO_QwVTrX5YDEuouveGICCupE78J7D1-4GHY2lt8CpUwvxWsnZjt1pezMvWKHPjMieyBtNKzGtLLOc_c04rzEXIQJUau6xIRLCV3w',
    pets: [
      {
        id: 'p2',
        name: 'Mimi',
        breed: 'Beagle',
        age: '3 Yrs',
        weight: '10 kg',
        gender: 'Female',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHmreRdHhz33McYyTCk1vsgw4aoJq_5CcGX51FbjAdwq7pa8l2bjoFGEeDutTn4VqLqZ0716SkCWVDoMeKVyLDVCFkWIfdAPIETNPhn4o0LDlsGsOKgIQbaDGj4QfTHeXJ6Y3Nosp_BaA41G-LegIj0GP0eAHiC1JXDBnhtQwbAH0bcupNO9EqSm_hy_g0cKIAcVgZ2Z4o9K7J_ACoFt_X0d7VwfIi3HliwH4fruvoXJ3y2LwAQ4vttDRcSnt4r5ptq0JXuVl7M1w9',
        alerts: [{ type: 'Vaccine', title: 'Vaccine Due', message: 'Rabies vaccination expires in 2 days.' }],
        history: [
          { date: 'Today, 10:00 AM', serviceName: 'Full Grooming & Bath', provider: 'Jessica', status: 'Completed' },
          { date: 'Sep 12, 2023', serviceName: 'General Checkup', provider: 'Dr. Sarah M.', status: 'Completed' },
          { date: 'Aug 15, 2023', serviceName: 'Nail Trimming', provider: 'Mike', status: 'Completed' }
        ]
      }
    ]
  },
  {
    id: 'c3',
    name: 'Mariana Costa',
    email: 'mariana@email.com',
    phone: '(11) 95555-0123',
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAGJJJT-MT_5X5Mw2U0n4xg86rKGFuukGVyAU85f_icuB2iJkCY0IzYS30ra-8KOaR8zx2HcFPA6l1tyKD7ofXGr9joUdLIAAxkST7AXk-8KL2g_FnAbklM41Ql5XQwbYKE_YPkfNz5u1iQ9VgUBsABF4gJ5vdoCTcziPSy2eOT-OkB94qUIDMJFlV_e8C8K1HjQtKk3YyglPGN8r4duRAErrhtzoQsXsrO1ye9dFMGa1cu--loHd7Yn1Q4K6tGLOJzhG5FblWlKmt',
    pets: [
      {
        id: 'p3',
        name: 'Luna',
        breed: 'Tabby Cat',
        age: '2 Yrs',
        weight: '4 kg',
        gender: 'Female',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4uggPWdYvvW-E9jtuBMPjrHZIUxiEE0trljpdA2AI7uOT3tncBnlEr1-A67zx56H7iEzDfmi1_6qx4rdpUZk5NMO1toSgf7oKXE_mhvHSqFRS0PaNaikoFCSpUCmuAf8kl0xkrY-U-4VG2jqdjrp63Lv-wwKrWcIdUKfOdqp-rwzUF8w1DakPB956T4f_ljD2mAEsSCA74-wm23SKcILKk0muKAMsop1a_eQo6oFpJ8V-8VJu7GpF5K8j_1svI3tFdidZN6wO3gmU',
        alerts: [],
        history: []
      }
    ]
  },
  {
    id: 'c4',
    name: 'Pedro Santos',
    email: 'pedro.s@email.com',
    phone: '(11) 98888-9999',
    status: 'Inactive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDStNUwpftiMgawbb8XgF8o-JP_5UJBlXVC-RfMxNgZmukRPXCipV69TXEOrCXHQzhSd0A6NNYUGENzybk4xt4PIJepenGKXgFBi1TTDFDaFYHuW_3SUIogN7Q4D0YfU82dQ8ZtQHW9PTnMw2H2jM788GgXrdllEWxpnzWTDRG5bX7TT12tf-eL3sZtuMcZwDpDLSSX1QDnOn_cMcqX1ulcxIdjtDo70k9QrJmkIzgoCUOS25-J4CL3x-T2KjG_ICXFCreHmnm05g6X',
    pets: [
      {
        id: 'p4',
        name: 'Thor',
        breed: 'French Bulldog',
        age: '1 Yr',
        weight: '12 kg',
        gender: 'Male',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0DiIq73HOHp1_BtBEfQbpGtXcQtL1aIc1ayT-nR0WcmIfLjUxB9gxJkFaeK8a0_2yg_R83dUy0yXIVNCGoJsMCdy8FNbw1NMFPn6jXd8Yh65GKZV1wplVPrGxrDcpbX7G2jBm1a5EJBvhxkJD02nujfWJS3fHGfHSmsqQCmgUZ9p2PrnSeqsf_dISnxvwQ743BIUYqqnO_Lsj8tUI5Q3cfZDtbBVOnuN6QZZw2PMmbhVyMGy_wqTyUYKWCRzsQdPULVEJEGZRJ_zb',
        alerts: [],
        history: []
      }
    ]
  }
];

export const SERVICES: Service[] = [
  { id: 's1', name: 'Banho Completo', description: 'Deep hygiene with premium products.', price: 60, duration: '45 min', icon: 'water_drop', category: 'Hygiene' },
  { id: 's2', name: 'Tosa Higiênica', description: 'Trimming of paws, belly and sensitive areas.', price: 45, duration: '30 min', icon: 'content_cut', category: 'Grooming' },
  { id: 's3', name: 'Banho + Tosa', description: 'Full grooming package for long-haired pets.', price: 95, duration: '75 min', icon: 'diamond', category: 'Grooming', isPopular: true },
  { id: 's4', name: 'Spa Relaxante', description: 'Massage, hydration and aromatherapy.', price: 120, duration: '90 min', icon: 'spa', category: 'Wellness' }
];

export const PACKAGES: Package[] = [
  {
    id: 'pk1',
    name: 'Pacote Mensal P',
    description: 'Ideal for small dogs needing weekly maintenance.',
    originalPrice: 285,
    discountedPrice: 240,
    discountTag: 'SAVE 15%',
    features: ['4x Full Baths', '1x Hygienic Trimming', 'Free Ribbon/Tie'],
    themeColor: 'secondary'
  },
  {
    id: 'pk2',
    name: 'Spa Day Premium',
    description: 'A full day of care and relaxation for your pet.',
    originalPrice: 200,
    discountedPrice: 180,
    discountTag: 'BEST SELLER',
    features: ['1x Bath + Hydration', '1x Relaxing Massage', 'Photo Session'],
    themeColor: 'primary',
    isBestSeller: true
  }
];

export const PRODUCTS: Product[] = [
  { id: 'pr1', name: 'Golden Premium 15kg', category: 'Food', description: 'Adults / Chicken & Rice', price: 149.90, stock: 24, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-_EeOJWMIIRg7QJae3y9r1jNzHt8tfHFm2XMo-YNy6hFVWgfa5saZ-6L-kDdzwxo9DBY8phqkjk2-ZWTJ2qMJCYs2r2cdb9oLaLhD_fXX8v1FrpMB1_OFECivxCaxLicnu-2s7-hqofcjL2n2R3ESeJqP4EWdV6JBybNFOImc6mMIQxzcX16nCjg5FY8I1I14clLcl5uGjF-ozVvw2_GPwkxHUWb8HUd8-BbU5gRfwPqSuhFEDqP9RuBCQP1jLEWHNt4nAJwYrVsp', lowStockThreshold: 5 },
  { id: 'pr2', name: 'Mordedor Resistente', category: 'Toys', description: 'Natural rubber / Size M', price: 25.90, stock: 3, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6m4pF0aUCQr2jCylbcSJC9Mmkh33O2Qd0TQerR9rik43frS8dHc9Y7YrA9XPZq84LcbLiA02FT6CmojY6TurJsYij_qtjJjsB5vNHrVW5ATeZGA8c1TDqT7UCaU2Wt9yzP_5t6yZt3NG_HzYzvFUT51XLu3ED0orHE_shoMK1XprxU_HrWSoDhZeArGagLaI_E504UPGCSJ7i_gEw37cMgHwZOHRAcqC6NHOwvZ1uHa8O6doV7hEhKmwMz0OzA2kHgfp92_whepxa', lowStockThreshold: 5 },
  { id: 'pr3', name: 'Shampoo Pet Clean', category: 'Hygiene', description: 'Neutral / 500ml', price: 32.00, stock: 12, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7sRvVyIo8h2aNSSEnZ69Q5wnhSCii6o4DEZlKSdXPmnEsMpvxGwfbmIfY_IHkk4CrlGZpVv4zuuMI_URWWDiEliDoxKj2biQXUJcC1UTkPtO1YboVIjnIab64lony0yowZ3PdP5yvrQxBhDPHku87zVN7vevlgcVEd5kYa9BSI_MUZ8KF28Gu29nO_bdlYzzy4KWkgwLnC8u6_IbSn8TwjckD3uLJbYg3CyMpRWIRk_wcZWASmlYDIZU5l_1wQvmzC90cwUQFdq7a', lowStockThreshold: 5 },
  { id: 'pr4', name: 'Coleira Ajustável', category: 'Accessories', description: 'Cats / Various Colors', price: 18.50, stock: 45, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_nkJ5Ht6wV656Daxd-80Ta-PVnS5hXVbS9FIPpxkFENTW-4YLrnT0eOQAjAL3QA0g1IueMBNsuCUuzS9WAh1FRj6kL_e8x01PnxUGPb4JrOc4TGYGZ6Vb71_pivD4RG3a0JWaXEWgNESXkB95IdXkr3HVPYOZYS8CJpc2ja90WY0HzU94dEh1o2W2nfbgRRYqRP8wiiq5OCD_WQ9xgmPKUhZUhQdRXtrS02x1Jc-0kAuE9Nt9yklJq00t8n8dvofN1DXBvBcWbLgF', lowStockThreshold: 5 }
];
