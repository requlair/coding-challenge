import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import DetailsPage from '../DetailsPage.vue';

const getLoadingStateSpy = vi.fn().mockReturnValue({ value: { movieDetails: 'done' }});
const getFavouritesStateSpy = vi.fn().mockReturnValue({ value: [] });
const removeFavouriteSpy = vi.fn();
vi.mock('@/composables/stateManagement', () => ({
    default: () => {
        return {
            getLoadingState: getLoadingStateSpy(),
            getMovieDetailsState: { value: 
                [{
                    id: 'id',     
                    image: 'image',
                    fullTitle: 'fullTitle',
                    plot: 'plot',
                    directors: 'directors',
                    writers: 'writers',
                    stars: 'stars',
                    imDbRating: '0',
                    runtimeStr: '0h 0min',
                    videoId: 'id',
                }],
             },
            getFavouritesState: getFavouritesStateSpy(),
            loadMovieDetails: vi.fn().mockReturnValue(Promise.resolve()),
            removeFavourite: removeFavouriteSpy,
            addFavourite: vi.fn(),
        }
    }
}));

describe('Details page', () => {
  it('should render', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('header').exists()).toBeTruthy();
    expect(wrapper.find('header img').attributes()).toContain({ src: 'image' });
    expect(wrapper.find('header h1').text()).toBe('fullTitle');
    expect(wrapper.find('header strong').text()).toBe('plot');
    expect(wrapper.find('Breadcrumbs-stub').exists()).toBeTruthy();
    expect(wrapper.findAll('.cast-block').length).toBe(3);
    expect(wrapper.findAll('.cast-block').at(0)?.text()).toContain('directors');
    expect(wrapper.findAll('.cast-block').at(1)?.text()).toContain('writers');
    expect(wrapper.findAll('.cast-block').at(2)?.text()).toContain('stars');
    expect(wrapper.find('.rating-block').exists()).toBeTruthy();
    expect(wrapper.find('.imdb').text()).toContain('0/10');
    expect(wrapper.find('.time').text()).toContain('0h 0min');
    expect(wrapper.find('.favourite').text()).toContain('Mark as favourite');
    expect(wrapper.find('.trailer h1').text()).toBe('Trailer')
    expect(wrapper.find('.trailer iframe').attributes()).toContain({ src: 'https://www.youtube.com/embed/id' });
  });
  it('should show loading state when data is not loaded yet', () => {
    getLoadingStateSpy.mockReturnValueOnce({ value: { movieDetails: 'loading' }});
    const wrapper = createWrapper();
    expect(wrapper.find('header img').attributes()).toContain({ src: '/assets/images/loading-image.jpg' });
    expect(wrapper.find('header h1').text()).toBe('loading');
    expect(wrapper.find('header strong').text()).toBe('loading');
    expect(wrapper.findAll('.cast-block').at(0)?.text()).toContain('loading');
    expect(wrapper.findAll('.cast-block').at(1)?.text()).toContain('loading');
    expect(wrapper.findAll('.cast-block').at(2)?.text()).toContain('loading');
    expect(wrapper.find('.rating-block').exists()).toBeTruthy();
    expect(wrapper.find('.imdb').text()).toContain('0/10');
    expect(wrapper.find('.time').text()).toContain('0h 0min');
    expect(wrapper.find('.favourite').text()).toContain('Mark as favourite');
    expect(wrapper.find('.trailer iframe').attributes()).toContain({ src: 'https://www.youtube.com/embed/VBlFHuCzPgY' });
  });
  it('should change the favourite icon and text when clicked', async () => {
    getFavouritesStateSpy.mockReturnValueOnce({ value : ['id'] });
    const wrapper = createWrapper();
    expect(wrapper.find('.favourite').text()).toContain('Marked as favourite');
    expect(wrapper.find('.favourite .star').classes()).toContain('selected');
    expect(removeFavouriteSpy).not.toBeCalled();
    await wrapper.find('button').trigger('click');
    expect(removeFavouriteSpy).toBeCalled();
  });
});

const createWrapper = () => {
  return shallowMount(DetailsPage, {
    props: { id: 'id' }
  });
};
