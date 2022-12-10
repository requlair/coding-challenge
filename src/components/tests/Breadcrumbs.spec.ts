import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest'
import Breadcrumbs from '../Breadcrumbs.vue';
import { useRouter, useRoute, type Router, type RouteLocationNormalizedLoaded } from 'vue-router';

vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
  useRoute: vi.fn()
}))

const overviewPath = { path: '/overview', name: 'overview', meta: { title: 'Overview' } };

describe('Breadcrumb component', () => {
  it('should render no crumbs when on root path', () => {
    const router = {
      options: { routes: [
        overviewPath,
      ] },
    };
    const route = {
      path: '/overview',
      name: 'overview',
      matched: [
        overviewPath,
      ],
    };
    vi.mocked(useRouter).mockReturnValueOnce(router as unknown as Router)
    vi.mocked(useRoute).mockReturnValueOnce(route as unknown as RouteLocationNormalizedLoaded)

    const wrapper = createWrapper();
    expect(wrapper.find('.breadcrumb-list').exists()).toBeFalsy();
  });

  it('should render nested paths', () => {
    const router = {
      options: { routes: [
        overviewPath,
        { path: '/details', name: 'details', meta: { title: 'Details' } },
      ] },
    };
    const route = {
      path: '/details',
      name: 'details',
      matched: [
        { path: '/details', name: 'details', meta: { title: 'Details' } },
      ],
    };
    vi.mocked(useRouter).mockReturnValueOnce(router as unknown as Router)
    vi.mocked(useRoute).mockReturnValueOnce(route as unknown as RouteLocationNormalizedLoaded)

    const wrapper = createWrapper();
    expect(wrapper.findAll('.breadcrumb-list li').length).toBe(2);
    expect(wrapper.find('router-link-stub').attributes()).toContain({ to: '/overview'});
    expect(wrapper.find('span').text()).toBe('Details');
  });
});

const createWrapper = () => {
  return shallowMount(Breadcrumbs, {
    global: {
        stubs: ['router-link'],
    }
  });
};
