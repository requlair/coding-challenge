import type { Movie } from '@/types';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import OverviewPage from '../OverviewPage.vue';

vi.mock('@/composables/stateManagement', () => ({
    default: () => {
        return {
            getLoadingState: { movies: 'done' },
            getMoviesState: { value: [{ id: 'id1', title: 'title1', description: '1998', image: 'image1'},{ id: 'id2', title: 'title2', description: '2000', image: 'image2'}] as unknown as Movie[]},
            getFavouritesState: { value: ['id1'] },
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
    expect(wrapper.findAll('section').at(0)?.text()).toBe('The Steven Spielberg and Tom Hanks Movie AppFind all the movies in which they worked together.');
    expect(wrapper.find('.selection-bar').exists()).toBeTruthy();
    expect(wrapper.findAll('button').length).toBe(2);
    expect(wrapper.findAll('button').at(0)?.classes()).toContain('selected');
    expect(wrapper.findAll('button').at(0)?.text()).toBe('All Movies');
    expect(wrapper.findAll('button').at(1)?.classes()).toEqual([]);
    expect(wrapper.findAll('button').at(1)?.text()).toBe('Favourites');
    expect(wrapper.findAll('card-stub').length).toBe(2);
    expect(wrapper.findAll('card-stub').at(0)?.attributes()).toContain({ id: 'id1', title: 'title1', year: '1998', image: 'image1'});
    expect(wrapper.findAll('card-stub').at(1)?.attributes()).toContain({ id: 'id2', title: 'title2', year: '2000', image: 'image2'});
  });
  it('should select the button when pushed', async () => {
    const wrapper = createWrapper();
    expect(wrapper.findAll('button').at(0)?.classes()).toContain('selected');
    expect(wrapper.findAll('button').at(1)?.classes()).toEqual([]);
    await wrapper.findAll('button').at(1)?.trigger('click');
    expect(wrapper.findAll('button').at(0)?.classes()).toEqual([]);
    expect(wrapper.findAll('button').at(1)?.classes()).toContain('selected');
    expect(wrapper.findAll('card-stub').length).toBe(1);
    expect(wrapper.findAll('card-stub').at(0)?.attributes()).toContain({ id: 'id1', title: 'title1', year: '1998', image: 'image1'});
  });
});

const createWrapper = () => {
  return mount(OverviewPage, {
    global: {
      stubs: ['card'],
  }
  });
};
