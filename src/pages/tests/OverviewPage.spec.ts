import type { Movie } from '@/types';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import OverviewPage from '../OverviewPage.vue';

vi.mock('@/composables/stateManagement', () => ({
    default: () => {
        return {
            getLoadingState: { movies: 'done' },
            getMoviesState: [{ id: 'id1', title: 'title1', description: '1998', image: 'image1'},{ id: 'id2', title: 'title2', description: '2000', image: 'image2'}] as unknown as Movie[],
            loadMovies: vi.fn().mockReturnValue(Promise.resolve()),
        }
    }
}));

describe('Overview page', () => {
  it('should render', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('header').exists()).toBeTruthy();
    expect(wrapper.find('header img').attributes()).toContain({ alt: 'steven-and-hank', src: '/assets/images/steven-and-hank.jpg'});
    expect(wrapper.findAll('section').length).toBe(2);
    expect(wrapper.findAll('section').at(0)?.text()).toBe('The Steven Spielberg and Tom Hanks Movie AppFind all the movies in which they worked together.')
    expect(wrapper.find('load-container-stub').exists());
    expect(wrapper.find('load-container-stub').attributes()).toContain({ status: 'done', variant: 'card' });
  });
});

const createWrapper = () => {
  return shallowMount(OverviewPage, {});
};
