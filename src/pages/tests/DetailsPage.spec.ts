import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import DetailsPage from '../DetailsPage.vue';

const getLoadingStateSpy = vi.fn().mockReturnValue({ value: { movieDetails: 'done' }});
vi.mock('@/composables/stateManagement', () => ({
    default: () => {
        return {
            getLoadingState: getLoadingStateSpy(),
            getMovieDetailsState: { value: 
                [{     
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
            loadMovieDetails: vi.fn().mockReturnValue(Promise.resolve()),
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
    expect(wrapper.find('.trailer h1').text()).toBe('Trailer')
    expect(wrapper.find('.trailer iframe').attributes()).toContain({ src: 'https://www.youtube.com/embed/id' });
  });
  it('should show loading state when data is not loaded yet', () => {
    getLoadingStateSpy.mockReturnValue({ value: { movieDetails: 'loading' }});
    const wrapper = createWrapper();
    expect(wrapper.find('header img').attributes()).toContain({ src: '/assets/images/loading-image.jpg' });
    expect(wrapper.find('header h1').text()).toBe('loading');
    expect(wrapper.find('header strong').text()).toBe('loading');
    expect(wrapper.findAll('.cast-block').at(0)?.text()).toContain('loading');
    expect(wrapper.findAll('.cast-block').at(1)?.text()).toContain('loading');
    expect(wrapper.findAll('.cast-block').at(2)?.text()).toContain('loading');
    expect(wrapper.find('.trailer iframe').attributes()).toContain({ src: 'https://www.youtube.com/embed/VBlFHuCzPgY' });
  });
});

const createWrapper = () => {
  return shallowMount(DetailsPage, {});
};
