const router = {
  add: '/proyectos/form/add',
  update: (id: string) => `/proyectos/form/update?id=${id}`,
  configEstados: (id: string) => `/proyectos/form/estados?id=${id}`,
  configLeadGroups: (id: string) => `/proyectos/form/lead-groups?id=${id}`,
};

export default router;
