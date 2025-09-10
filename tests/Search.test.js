import Search from "../src/components/search/Search.vue";
import { mount } from "@vue/test-utils";

describe('Search.vue', () => {
  it('should renders input and calls pageChangeSearch on enter and click', async () => {
    const pageChangeSearchMock = vi.fn();
    const wrapper = mount(Search, {
      props: {
        pageChangeSearch: pageChangeSearchMock,
      },
    });

    const input = wrapper.find('input');
    await input.setValue('Inception');
    await input.trigger('keyup.enter');

    expect(pageChangeSearchMock).toHaveBeenCalledWith(1, 'Inception');
    expect(pageChangeSearchMock).toHaveBeenCalledTimes(1);

    await wrapper.find('svg').trigger('click');

    expect(pageChangeSearchMock).toHaveBeenCalledWith(1, 'Inception');
    expect(pageChangeSearchMock).toHaveBeenCalledTimes(2);
  });
});
