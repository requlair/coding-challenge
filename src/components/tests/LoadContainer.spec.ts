import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LoadContainer from '../LoadContainer.vue';

describe('Load container component', () => {
  it('should render with spinner when status is loading', () => {
    const wrapper = createWrapper();
    expect(wrapper.findAll('.lds-ring').length).toBe(3);
  });
  it('should render with content when status is done', () => {
    const wrapper = createWrapper({ status: 'done', variant: 'card'});
    expect(wrapper.find('.lds-ring').exists()).toBeFalsy();
    expect(wrapper.text()).toBe('Content');
  })
});

const createWrapper = (props = { status: 'loading', variant: 'card'}) => {
  return mount(LoadContainer, {
    props: props,
    slots: {
        default: 'Content'
    }
  });
};
