import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  document: {
    backgroundColor: 'red',
  },
  header: {
    marginBottom: '50px',
    backgroundColor: 'orangered',
    fontSize: '10px',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
  },
  page: {
    backgroundColor: 'transparent',
    borderLeft: 0,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const imgLink =
  'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const MyDocument = () => {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View>
          <Text>Hello 111👋</Text>
        </View>
        <View style={styles.header}>
          <Image style={{ width: '400px' }} src={imgLink} />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies
            lectus eu augue elementum sagittis. Nulla in diam et lectus consectetur
            placerat nec vulputate ipsum. Vestibulum volutpat felis in tellus ornare
            eleifend. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas at metus ut arcu tempor sagittis. Phasellus
            vel dui pretium, mollis nisl vel, aliquet diam. Praesent ipsum magna, placerat
            a enim in, tempor luctus urna. Nulla eu eros neque.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            Vivamus vulputate consequat dui, at ornare nisl ultricies vitae. Proin
            dignissim eu diam et porta. Duis facilisis, mauris sollicitudin pretium
            finibus, mauris felis posuere nibh, et convallis lacus nisi ac nisi. Sed ipsum
            diam, egestas in ornare id, pellentesque ut nunc. Donec non tellus egestas,
            ornare enim quis, tempus libero. Vivamus et turpis tincidunt, pharetra ipsum
            ac, tincidunt tellus. Phasellus quis dui eget metus fringilla tristique. In
            nec mauris purus. Mauris leo risus, varius eu lorem ut, accumsan porttitor
            dui. Quisque blandit, elit et congue aliquam, nibh tortor scelerisque sapien,
            ut pharetra magna erat ut arcu. Proin in mauris cursus, pharetra purus non,
            ullamcorper dui. Ut at erat vel lorem ullamcorper varius eget eu dolor. Morbi
            nec enim accumsan, volutpat lectus nec, malesuada risus. Donec porttitor
            tincidunt augue eget congue. Donec a tristique leo. Maecenas ut sollicitudin
            odio. Aenean viverra risus sed quam sodales sollicitudin. Sed malesuada, orci
            nec consequat feugiat, massa justo tempus dui, dapibus tristique neque arcu
            vitae tellus. In nibh ante, maximus quis hendrerit et, pellentesque sit amet
            nisl. Integer fringilla aliquet velit, imperdiet sodales leo maximus at.
            Suspendisse tempor risus at metus commodo venenatis. Aenean sit amet facilisis
            turpis. Pellentesque sed consequat purus. Integer quis tempor arcu. Aenean a
            pellentesque ligula. Vivamus condimentum ut quam id volutpat. Aenean mi
            tellus, rutrum quis elit sed, iaculis aliquam quam. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent
            enim augue, facilisis at scelerisque vitae, lobortis id velit. Donec sit amet
            molestie ex. Aliquam tempus odio ac odio congue, vitae fermentum neque tempor.
            Donec pharetra erat felis, nec ullamcorper est fermentum a. Cras ut leo
            posuere nunc porttitor cursus eget sit amet sapien. Duis pellentesque nunc
            quis ligula convallis vulputate. In vitae sapien sem. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Integer eget ultricies mi. Maecenas
            eget nibh rutrum, pretium mi id, facilisis urna. Etiam at mauris imperdiet,
            pulvinar erat vel, auctor sapien. Nullam et enim lobortis, consequat ligula
            ut, molestie libero. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Donec semper mollis dapibus. Quisque et laoreet purus.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
