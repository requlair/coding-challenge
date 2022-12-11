import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Card from '../Card.vue';
import { useRouter, type Router } from 'vue-router';

vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
}))

describe('Card component', () => {
  it('should render', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('h4').text()).toBe('title (1998)');
    expect(wrapper.find('button').exists()).toBeTruthy();
  });
  it('should navigate to details page when button is clicked', () => {
    const push = vi.fn()
    vi.mocked(useRouter).mockImplementationOnce(() => ({ push }) as unknown as Router);
    const wrapper = createWrapper();
    wrapper.find('button').trigger('click');
    expect(push).toHaveBeenCalledWith({ path: `/overview/details/id`})
  });
});

const createWrapper = (props = { id: 'id', title: 'title', year: '1998', image: 'image'}) => {
  return shallowMount(Card, {
    props: props,
  });
};
