module.exports= function($scope, $state, TestService){
		console.log('enter controller_685')
		$scope.test = TestService.getTest()
	}
